"use client";
import { useCallback } from "react";
import Link from "next/link";
import { CirclePlus, Pencil } from "lucide-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";

import { Delete } from "./Delete";
import { usePlayerUseCase } from "@/hooks/player-use-case";

export const columns = [
  { name: "NOME", uid: "name" },
  { name: "PONTOS", uid: "points" },
  { name: "", uid: "actions" },
];

export function List() {
  const { findAllPlayerUseCase } = usePlayerUseCase();
  const players = findAllPlayerUseCase.execute({});

  type Output = ReturnType<typeof findAllPlayerUseCase.execute>[0];

  const renderCell = useCallback((player: Output, columnKey: React.Key) => {
    const cellValue = player[columnKey as keyof Output];

    switch (columnKey) {
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href={`/players/update/${player.id}`}>
                  <Pencil size={16} />
                </Link>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Excluir">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Delete id={player.id} name={player.name} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <div className="place-items-center m-1">
        <div className="flex flex-col items-end gap-4 w-full max-w-xl">
          <Button isIconOnly size="lg" as={Link} href="/players/create">
            <CirclePlus size={28} />
          </Button>
          <Table aria-label="Example table with custom cells">
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid}>{column.name}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={players}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
