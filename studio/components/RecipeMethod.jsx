import React from "react";
import { useState } from "react";
import {Card, TextArea, Heading, Dialog} from "@sanity/ui";
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
      <Dialog width={300} onClose={onClose}>
      <ButtonComponent buttonLabel={"Ingredients for Step"}></ButtonComponent>
      <Card padding={3}>
        <Heading as="h3" space={2}>Step</Heading>
      </Card>
      <Card padding={2} style={{height: 500}}>
        <TextArea style={{height: 400}}>
        </TextArea>
      </Card>
      </Dialog>
    </div>
  )
}

const RecipeMethod = React.forwardRef((props, ref) =>  {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log("Open Modal", isOpen);
  }

  const closeModal = () =>{
    setIsOpen(false);
  }
  
  
  // let count = 0;
  // function click(){

  //   return;
  // }


  return (
    <div>
      <ButtonComponent onClick={openModal} buttonLabel={'Method'}/>
      {/* {console.log("Count:", count)} */}
      <Modal isOpen={isOpen} onClose={closeModal}></Modal>

    </div>
  )
})

export default RecipeMethod;