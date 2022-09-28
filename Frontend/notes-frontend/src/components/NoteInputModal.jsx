import React from 'react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Button, Text, } from '@chakra-ui/react'
import NoteInput from './NoteInput'

function NoteInputModal() {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button mt={"15%"} size="lg" colorScheme={"teal"}
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Add Notes
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader> <Text fontSize={"4xl"}>THE NOTES APP</Text></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <NoteInput/>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default NoteInputModal