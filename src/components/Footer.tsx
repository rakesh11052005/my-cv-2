import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by{" "}
            <Link
              href="https://github.com/rakesh11052005"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Rakesh
            </Link>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex hidden flex-row items-center space-x-2 md:flex">
            <p className="text-xs text-muted-foreground">Local time:</p>
            <p className="text-sm font-semibold">{time} UTC+1</p>
          </span>
        </span>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/rakesh11052005"
            target="_blank"
            passHref
            className="text-muted-foreground transition hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/penugonda-venkata-siva-sai-rakesh-a39856352"
            target="_blank"
            passHref
            className="text-muted-foreground transition hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com/rakeshpenugonda_2005"
            target="_blank"
            passHref
            className="text-muted-foreground transition hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:rakesh123yo@gmail.com"
            passHref
            className="text-muted-foreground transition hover:text-foreground"
          >
            <MailIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
