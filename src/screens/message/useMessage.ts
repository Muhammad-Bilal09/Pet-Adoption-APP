import {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {
  sendMessageToFirestore,
  endConversation,
  deleteConversation,
  listenForMessages,
} from '../../redux/slice/conversationSlice';

const useMessage = () => {
  const dispatch: AppDispatch = useDispatch();
  const conversation = useSelector((state: RootState) => state.conversation);
  const [message, setMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  useEffect(() => {
    let unsubscribe: () => void;

    if (conversation.isActive && conversation.petOwnerId) {
      dispatch(listenForMessages(conversation.petOwnerId));
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [conversation.isActive, conversation.petOwnerId, dispatch]);

  const handleSendMessage = useCallback(async () => {
    if (message.trim() && conversation.petOwnerId) {
      await dispatch(
        sendMessageToFirestore({
          sender: 'User',
          message,
          petOwnerId: conversation.petOwnerId!,
        }),
      );

      setMessage('');
      setIsTyping(true);

      setTimeout(async () => {
        await dispatch(
          sendMessageToFirestore({
            sender: 'Owner',
            message: 'Thanks for your message, I will get back to you soon!',
            petOwnerId: conversation.petOwnerId!,
          }),
        );
        setIsTyping(false);
      }, 2000);
    }
  }, [message, conversation.petOwnerId, dispatch]);

  const handleEndConversation = async () => {
    if (conversation.petOwnerId) {
      await dispatch(deleteConversation(conversation.petOwnerId));
    }
    dispatch(endConversation());
  };

  return {
    conversation,
    message,
    setMessage,
    handleSendMessage,
    handleEndConversation,
    isTyping,
  };
};

export default useMessage;
