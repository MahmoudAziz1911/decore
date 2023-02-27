const FormatPrice = ({price}) => {
    let formatedPrice = new Intl.NumberFormat('en-EG', {
      style: 'currency',
      currency: 'EGP',
    }).format(( price * 10 / 10).toFixed(2));
  
    return formatedPrice;
  };
  
  export default FormatPrice