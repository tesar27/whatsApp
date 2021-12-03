import { IonPage } from '@ionic/vue'
<template>
  <div id="container">
      <p>Please put your number for registering </p>
      <ion-item>
        <ion-select v-model="value">
          <ion-select-option 
          :value="country.code"
          v-for="(country, index) in myData"
          :key="index"
          > {{country.name}} {{ country.code }}  
          </ion-select-option> 
        </ion-select>
        <ion-input v-model="number"></ion-input>
      </ion-item>
      <ion-item>        
        <p> {{value}} {{ number }} </p>
      </ion-item>
      <ion-button color="success">Next</ion-button>
  </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonSelectOption, IonSelect, IonButton } from '@ionic/vue';

export default {
  components: {
    IonInput, IonItem,
    IonSelectOption,
    IonSelect,
    IonButton
  },
  name: 'PhoneNumberInput',
  props: {
  },
  data() {
    
    const countryCodes = 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json'
    const myData = [
      {name: 'Kazakhstan',
      code: '+7'},
      {name: 'Germany',
      code: '+49'},
      {name: 'Switzerland',
      code: '+44'}
    ]
    return {
      countryCodes,
      myData,
      selectedCountryCode : null,
      message: '', 
      number: '',
      value: '',
      country: ''
    }
  }
    
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>