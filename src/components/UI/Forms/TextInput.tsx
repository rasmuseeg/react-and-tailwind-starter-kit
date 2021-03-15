import styled from "styled-components";
import tw from 'twin.macro';

const StyledInput = styled.input.attrs({
  className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
})``;

export default StyledInput;