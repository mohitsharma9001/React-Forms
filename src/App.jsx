import FormDetails from './components/form';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
     <FormDetails />
     </ChakraProvider>
 
    </div>
  );
}

export default App;
