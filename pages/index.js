import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/ui/Card";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function Home() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/About");
  }
}
