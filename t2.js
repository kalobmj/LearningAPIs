const data = {
    // Using a BigInt here to store the exact value,
    // but it can also be a custom high-precision number library,
    // if the number might not be an integer.
    BigInt: 
    gross_gdp: 12345678901234567890n,
  };
  

// Using toJSON() method
BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const str1 = JSON.stringify(data);
  
  // Using JSON.stringify() with replacer
  const str2 = JSON.stringify(data, (key, value) => {
    if (key === "gross_gdp") {
      return value.toString();
    }
    return value;
  });
  