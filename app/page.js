"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-black text-background h-screen flex flex-col justify-center items-center px-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        className="mb-6"
      >
        <Image
          src="/images/icon.svg"
          height={250}
          width={250}
          className="object-contain h-[150px] lg:h-[250px]"
          alt="logo"
        />
      </motion.div>

      <p className="mb-6 text-center text-lg font-bold">Yeni Yüzüyle</p>
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-yellow via-pink to-purple bg-clip-text text-transparent text-center mb-6">
        Çok Yakında
      </h1>
      <p className="mb-6 text-center lg:text-lg mb-2">
        Kısa bir süre içinde yeni web sayfamız yayında olacaktır
      </p>
      <div className="mb-6 text-center space-y-2 text-sm">
        <p>info@cormep.com</p>
        <p>+90 216 565 27 49</p>
        <Link
          className="underline"
          href="https://www.google.com/maps/place/Cormep+Organizasyon/@40.984308,29.0523471,17z/data=!4m6!3m5!1s0x14cab79804119eb9:0x6ccfa100ae459670!8m2!3d40.984304!4d29.054922!16s%2Fg%2F11fl09kq1r?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
        >
          Google Map
        </Link>
      </div>
    </div>
  );
}
