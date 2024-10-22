const { createApp, ref,computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)      
        const premium = ref(true)   
        const premiumMessage = computed(() =>{
            return premium.value ? 'You are a premium member!' : 'You are not a premium member.';
        });
            
  
        return {
            cart,
            premium,
            premiumMessage
        }
    }
  
})

app.component('product-display', productDisplay)

app.mount('#app')
