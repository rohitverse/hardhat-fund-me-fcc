const networkConfig={
    5:{
        name: "goerli",
        ethUsdPriceFeed: " "
    },
    137:{
        name: "polygon",
        ethUsdPriceFeed: " "
    },

}

const developmentChain = ["hardhat", "localhost"]
const DECIMALS =8
const INITIAL_ANSWER=200000000000


module.exports={networkConfig,developmentChain,DECIMALS,INITIAL_ANSWER,}