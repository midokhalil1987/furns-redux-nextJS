import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabFour from "./TabFour";
import TabOne from "./TabOne";
import TabThree from "./TabThree";
import TabTow from "./TabTow";

const MainTabs = () => {
  return (
    <div>
      <Tabs>
        <div className="sc-jYCGPb jmZNmQ">
          <TabList>
            <Tab>New Arrival</Tab>
            <Tab>Featured</Tab>
            <Tab>On Sale</Tab>
            <Tab>Tending</Tab>
          </TabList>
        </div>
        <TabPanel>
          <TabOne />
        </TabPanel>
        <TabPanel>
          <TabTow />
        </TabPanel>
        <TabPanel>
          <TabThree />
        </TabPanel>
        <TabPanel>
          <TabFour />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MainTabs;
