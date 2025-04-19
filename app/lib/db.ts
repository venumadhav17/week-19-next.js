import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

/*declare global {
  var primsa: undefined | ReturnType<typeof prismaClientSingleton>;
}*/

//window.prisma = 1
// window.prisma
// 1

//@ts -ignore
//const prisma = globalThis.prisma ?? prismaClientSingleton();

const prisma = globalThis.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// not a problem on production in dev mode

export default prisma;

//if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
