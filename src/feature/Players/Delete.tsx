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
import { useRouter } from "next/navigation";

interface DeleteProps extends PropsWithChildren {
  id: string;
  name: string;
}

export function Delete({ id, name }: DeleteProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  function onDelete() {
    deletePlayerUseCase.execute(id);
    router.refresh();
  }

  return (
    <>
      <Trash2 size={18} color="#f31260" strokeWidth={1.25} onClick={onOpen} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-center">
                <CircleAlert size={48} color="#ff3838" />
              </ModalHeader>
              <ModalBody className="text-center">
                Deseja excluir jogador: {name} ?
              </ModalBody>
              <ModalFooter>
                <Button
                  size="sm"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Fechar
                </Button>
                <Button
                  size="sm"
                  color="warning"
                  variant="flat"
                  onPress={() => {
                    onDelete();
                    onClose();
                  }}
                >
                  Excluir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
