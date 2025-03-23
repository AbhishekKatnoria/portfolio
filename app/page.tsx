import Header from "./components/Header";
import Profile from "./components/profile";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <Header/>
      <Profile/>
    </RootLayout>
  );
}
