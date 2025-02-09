"use client";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { CircleAlert, Trash2 } from "lucide-react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

import { usePlayerUseCase } from "@/hooks/player-use-case";

interface DeleteProps extends PropsWithChildren {
  id: string;
  name: string;
}

export function Delete({ id, name }: DeleteProps) {
  const { deletePlayerUseCase } = usePlayerUseCase();
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
