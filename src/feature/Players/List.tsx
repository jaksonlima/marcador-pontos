"use client";
import React, { SVGProps } from "react";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button,
} from "@heroui/react";
import { CirclePlus } from "lucide-react";

import { findAllPlayerUseCase } from "@/@core/infra/player-container";
import { Delete } from "./Delete";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = [
  { name: "NOME", uid: "name" },
  { name: "PONTOS", uid: "points" },
  { name: "", uid: "actions" },
];

export const EditIcon = (props: IconSvgProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 20 20"
      width="1em"
      {...props}
    >
      <path
        d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M2.5 18.3333H17.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

type Output = ReturnType<typeof findAllPlayerUseCase.execute>[0];

export function List() {
  const players = findAllPlayerUseCase.execute({});

  const renderCell = React.useCallback(
    (player: Output, columnKey: React.Key) => {
      const cellValue = player[columnKey as keyof Output];

      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Editar">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <Link href={`/players/update/${player.id}`}>
                    <EditIcon />
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
    },
    []
  );

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
