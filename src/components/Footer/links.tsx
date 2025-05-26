import Link from "next/link";

const loggedInfooterPaths = [
  { title: "Home", href: "/" },
  { title: "Factory", href: "/factory" },
  { title: "Idea", href: "/idea" },
];
const FooterLinks = () => {
  return (
    <div className="flex items-center gap-4 pb-6">
      {loggedInfooterPaths.map((item, index) => (
        <Link key={index} href={item.href}>
          {item.title}&nbsp;
          {index !== loggedInfooterPaths.length - 1 && "|"}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
