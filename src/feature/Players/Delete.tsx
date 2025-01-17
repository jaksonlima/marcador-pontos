import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { CircleAlert, Trash2 } from "lucide-react";
import { PropsWithChildren } from "react";

import { deletePlayerUseCase } from "@/@core/infra/player-container";

interface DeleteProps extends PropsWithChildren {
  id: string;
  name: string;
}

export function Delete({ id, name, children }: DeleteProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  function onDelete() {
    deletePlayerUseCase.execute(id);
  }

  return (
    <>
      {children}
      <Trash2 size={18} color="#f31260" strokeWidth={1.25} onClick={onOpen} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                <CircleAlert size={48} color="#ff3838" />
              </ModalHeader>
              <ModalBody>Deseja excluir jogador: {name} ?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Fechar
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onDelete();
                    onClose();
                  }}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
