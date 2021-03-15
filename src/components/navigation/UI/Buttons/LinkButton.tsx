import styled from "styled-components";
import tw from "twin.macro";

const LinkButton = styled.button.attrs({
  className: '',
})`
  &:hover {
    ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
  }
`;

export default LinkButton;