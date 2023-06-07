import React from "react";
import { useState } from "react";
import {Card, TextArea, Heading} from "@sanity/ui";
import ButtonComponent from "./ButtonComponent";

const Modal = ({isOpen, onClose, children}) => {
  const closeModal = () => {
    onClose();
  }

  if (!isOpen) {
    return null;
  }


  return (
    <div>
      <Card >
        <Heading>Step</Heading>
        <TextArea>

        </TextArea>
        {children}
      </Card>
    </div>
  )
}

const RecipeMethod = React.forwardRef((props, ref) =>  {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }
  let count = 0;
  return (
    <div>
      <ButtonComponent onClick={count++} buttonLabel={'Method'}/>
      {console.log("Count:", count)}
      <Modal isOpen={isOpen} onClose={closeModal}></Modal>

    </div>
  )
})

export default RecipeMethod;