const trackCryptoPortfolio=async(array)=>{
    const baseUrl= 'https://api.coingecko.com/api/v3/coins/markets';
    const vsCurrency='usd';
    let trackCryptoPortfolioValue=0;
    for(const {symbol,quantity} of array){
  try{
  const response=await fetch(`${baseUrl}?vs_currency=${vsCurrency}&ids=${symbol}`);
  
   if (!response.ok) {
          throw new Error(`Failed to fetch data for ${symbol}`);
        }
  
        const [cryptoData] = await response.json();
        
        // Destructure necessary data with renaming and default values
        const {
          name = 'Unknown',
          current_price: price = 0,
          market_cap: marketCap = 0
        } = cryptoData || {};  // Optional chaining in case cryptoData is undefined
  
        // Calculate the value of this cryptocurrency in the portfolio
        const cryptoValue = price * quantity;
         totalPortfolioValue += cryptoValue;
  }
  catch(error){
   console.log(error);
  }
    }
    
    
  };
  const portfilo=[
      { 
        symbol: 'bitcoin', quantity: 2 
      }, 
      { 
        symbol: 'ethereum', quantity: 5 
      }
    ];
  trackCryptoPortfolio(portfilo);
  