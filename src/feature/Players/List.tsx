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

import { findAllPlayerUseCase } from "@/@core/infra/player-container";
import { Delete } from "./Delete";

export const columns = [
  { name: "NOME", uid: "name" },
  { name: "PONTOS", uid: "points" },
  { name: "", uid: "actions" },
];

type Output = ReturnType<typeof findAllPlayerUseCase.execute>[0];

export function List() {
  const players = findAllPlayerUseCase.execute({});

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
          <Link href="/players/create">
            <Button isIconOnly aria-label="Like">
              <CirclePlus />
            </Button>
          </Link>
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
