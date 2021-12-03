<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar background="success">
          <ion-title size="big">Welcome to WhatsApp</ion-title>
        </ion-toolbar>
      </ion-header>
        
      <PhoneNumberInput />
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PhoneNumberInput from '../components/PhoneNumberInput.vue';


export default  {
  name: 'RegisterPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, PhoneNumberInput },
  data() {
      return { 
          message: ''
      }
  }
}
</script>