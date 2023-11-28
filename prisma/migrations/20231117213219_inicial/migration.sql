-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "veiculo" TEXT NOT NULL,
    "num_vaga" TEXT NOT NULL,
    "limpeza" BOOLEAN NOT NULL,
    "hora_entrada" TIMESTAMP(3) NOT NULL,
    "hora_saida" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);
