// start banking js 
const depositeBtn= document.getElementById('deposite-btn');

depositeBtn.addEventListener('click',function(){
    
    const depositeInput= document.getElementById('deposite-input').value;
    const newDepositeInput=parseFloat(depositeInput);
    const previousDepositeInput= document.getElementById('deposite').innerText;
   const newPreviousDepositeInput= parseFloat(previousDepositeInput);
   const balanceInput= document.getElementById('balance').innerText;
   const newBalanceInput= parseFloat(balanceInput);
    const totalDeposite= newDepositeInput + newPreviousDepositeInput;
    const totalBalance=  newDepositeInput+ newBalanceInput;
    document.getElementById('balance').innerText=totalBalance;

    document.getElementById('deposite').innerText=totalDeposite;
    document.getElementById('deposite-input').value=''; 
   

})

// withdro js 

document.getElementById('withdrow-btn').addEventListener('click',function(){
    const withdrowInput= document.getElementById('withdrow-input').value;
    const floatWithdrowInput= parseFloat(withdrowInput);
    const previousWithdrowInput= document.getElementById('withdrow').innerText;
   const  floatPreviousWithdrowInput= parseFloat(previousWithdrowInput);
   const balanceInput= document.getElementById('balance').innerText;
   const floatBalance= parseFloat(balanceInput);
   if(floatBalance<floatWithdrowInput){

       const span=document.getElementById('emepy').innerText='Sorry sir your blance is low.';
       return span;
   }
    const totalWithdrow= floatWithdrowInput+ floatPreviousWithdrowInput;
    const totalBalance= floatBalance - floatWithdrowInput;
   
    document.getElementById('withdrow').innerText =totalWithdrow;
    document.getElementById('balance').innerText=totalBalance;
    const span=document.getElementById('emepy').innerText='';
   
    document.getElementById('withdrow-input').value='';
    console.log(totalWithdrow);
})