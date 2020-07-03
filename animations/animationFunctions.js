// function to parse style value and return integer without value string 
const parseStyleValue = string => {
    let lastValue = string[string.length-1]; 
    // there will be tons of cases for this function, so many that it should probably be split into mutliple functions. Like, one for parsing colors (rgb versus color name versus hex), one for parsing lengths/positions, and more. 
    if (lastValue === "%"){
        return parseInt(string.slice(0,string.length-1))
    }else{
        return parseInt(string.slice(0,string.length-2))
    }
}