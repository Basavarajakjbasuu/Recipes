import  { FC, ReactElement, useState, useEffect } from 'react';
import { tabs } from '../constants';

import { useQuery } from '@tanstack/react-query'

import './tabs.css';
import { fetchData } from '../../api/fetchData';
import { cardQueries } from '../../api/globals';

const Tabs: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const { data, refetch } = useQuery(
    ['recipes'],
    async () => {
      try {
        const data = await fetchData([['mealType', tabs[activeTab - 1]?.label.trim().toLowerCase() || ''], ...cardQueries]);
        return data;
      } catch (error) {
        throw new Error('Error fetching recipes.');
      }
    },
    {
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    });

  useEffect(() => {
    
    refetch()
  }, [activeTab, refetch])
  
  console.log(data)

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