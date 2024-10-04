import { useQuery } from 'react-query';

const fetchPizzas = async () => {
    const res = await fetch('https://gist.githubusercontent.com/aditya-samal/c075c71045acb8fd3b04a7996c7463a7/raw/905b79d1510842e3a770e9fa2641b44bc9d3c716/pizzas.json');
    const data = await res.json();
    
    // Ensure data is an array
    if (Array.isArray(data.data)) {
      return data.data;
    } else {
      throw new Error('Data is not an array');
    }
  };
  
  

export const usePizzas = () => {
  return useQuery('pizzas', fetchPizzas);
};
