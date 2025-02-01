"use client";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";
import { usePathname, useRouter } from "next/navigation";

export function Bread() {
  const router = useRouter();
  const pathname = usePathname();

  const isPlayers = pathname === "/players";
  const isCreate = pathname.includes("/create");
  const isUpdate = pathname.includes("/update");

  function onHandleName() {
    if (isCreate) {
      return "Criar";
    }

    if (isUpdate) {
      return "Atualizar";
    }
  }

  return (
    <Breadcrumbs underline="active">
      <BreadcrumbItem key="home" onPress={() => router.push("/")}>
        Início
      </BreadcrumbItem>
      <BreadcrumbItem
        key="players"
        isCurrent={isPlayers}
        onPress={() => router.push("/players")}
      >
        Jogadores
      </BreadcrumbItem>
      <BreadcrumbItem
        key="change"
        isCurrent={isCreate || isUpdate}
        onPress={() => router.push("/players/create")}
      >
        {onHandleName()}
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
