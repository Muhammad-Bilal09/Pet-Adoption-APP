import React from 'react';
import PetForm from '../../components/petForm/PetForm';
import {useDonatePet} from './useDonatePet';

const DonateScreen: React.FC = () => {
  const {
    formData,
    handleChange,
    pickImage,
    handleSubmit,
    uploading,
    petTypes,
    yesNoOption,
    genderOptions,
  } = useDonatePet();

  return (
    <PetForm
      petAge={formData.petAge}
      setPetAge={value => handleChange('petAge', value)}
      petType={formData.petType}
      setPetType={value => handleChange('petType', value)}
      petBreed={formData.petBreed}
      setPetBreed={value => handleChange('petBreed', value)}
      amount={formData.amount}
      setAmount={value => handleChange('amount', value)}
      vaccinated={formData.vaccinated}
      setVaccinated={value => handleChange('vaccinated', value)}
      gender={formData.gender}
      setGender={value => handleChange('gender', value)}
      weight={formData.weight}
      setWeight={value => handleChange('weight', value)}
      location={formData.location}
      setLocation={value => handleChange('location', value)}
      description={formData.description}
      setDescription={value => handleChange('description', value)}
      imageUri={formData.imageUri}
      pickImage={pickImage}
      petTypes={petTypes}
      yesNoOptions={yesNoOption}
      genderOptions={genderOptions}
      handleSubmit={handleSubmit}
      uploading={uploading}
      buttonText="Donate Pet"
    />
  );
};

export default DonateScreen;
