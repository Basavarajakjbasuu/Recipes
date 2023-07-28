import  { FC, ReactElement, useState } from 'react';
import { tabs } from '../constants';

import './tabs.css';

const Tabs: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <section className="section tab">

      <div className="container">

        <div
          className="tab-list"
          role="tablist"
          aria-label="Meal type"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn title-small  ${activeTab === tab.id ? 'active' : ''}`}
              role="tab"
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab === tab.id ? 'true' : 'false'}
              data-tab-btn
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="tab-panel"
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            tabIndex= {0}
            data-tab-panel
            hidden={activeTab !== tab.id}
          >
            {tab.content}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Tabs