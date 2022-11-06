-- CreateTable
CREATE TABLE "Orden" (
    "in" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "pedido" JSONB NOT NULL,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("in")
);
