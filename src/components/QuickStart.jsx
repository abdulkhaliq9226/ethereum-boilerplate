import { Card } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "700px",
    fontSize: "16px",
    fontWeight: "500",
  },
  cardBody: {
    fontWeight: "normal"
  }
};

export default function QuickStart() {
  return (
    <Card
      style={styles.card}
      title={
        <div style={styles.header}>
          Welcome to my DApp
        </div>
      }
    >
      <div >
        <img style={{ display: "block", margin: "0 auto" }} src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/685/7009016685_ed272c55-c923-4238-9047-3aa540c2cd70.png?cb=1647947346" />
        <br></br>
      </div>
      <div style={styles.cardBody}> A DApp which connects with your Wallet, and can be used to transfer funds, hold FIAT, See Balances, List down the Transfers, See NFTs, List contracts and so on.</div>
    </Card >
  );
};