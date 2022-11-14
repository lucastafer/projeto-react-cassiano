import { useEffect, useState } from "react";
import InventoryForm from "./components/InventoryForm";
import MonitorsTable from "./components/MonitorsTable";
import { IInventoryFormPayload } from "./interfaces/IInventory";

const App = () => {
  const [monitorsList, setMonitorsList] = useState<
    Array<IInventoryFormPayload>
  >([]);

  return (
    <div className="App">
      <InventoryForm />
    </div>
  );
};

export default App;
