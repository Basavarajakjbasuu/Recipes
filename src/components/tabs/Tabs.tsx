import  { FC, ReactElement, useState, useEffect } from 'react';
import { tabs } from '../constants';

import './tabs.css';

import { Card } from '..';
import CardSkeleton from '../skeleton/CardSkeleton';

import { useQuery } from '@tanstack/react-query'
import { fetchData } from '../../api/fetchData';
import { cardQueries } from '../../api/globals';

import { Link } from 'react-router-dom';

import { Recipe, RecipeCards } from '../../types';


const Tabs: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  //fetching data with help of React-Query
  const currentTabLabel = tabs[activeTab - 1]?.label.trim().toLowerCase();
  const { data, refetch, isLoading, isRefetching } = useQuery(
    ['recipes'],
    async () => {
      try {
        const responseData: Recipe | Recipe[] = await fetchData([['mealType', currentTabLabel || ''], ...cardQueries]);
        return responseData;
      } catch (error) {
        throw new Error('Error fetching recipes.');
      }
    },
    {
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    });

  useEffect(() => {
    refetch()
  }, [activeTab, refetch]);

  const tenFoodItems = Array.isArray(data) ? data.slice(0, 10) : [data];
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
              className={`tab-btn has-state title-small  ${activeTab === tab.id ? 'active' : ''}`}
              role="tab"
              id={`tab-${tab.id}`}
              tabIndex={activeTab === tab.id ? 0 : -1}
              aria-controls={`panel-${tab.id}`}
              aria-selected={activeTab === tab.id ? 'true' : 'false'}
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
            hidden={activeTab !== tab.id}
          >
            <div className="grid-list">
              {isLoading || isRefetching ? (
                  <>
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                    <CardSkeleton />
                  </>
                ) : (
                  <>
                    {
                      tenFoodItems?.map((item: RecipeCards) => (
                        <Card
                        key={item?.recipe?.uri}
                        recipe={item?.recipe} 
                        />
                      ))
                    }
                  </>
                )}
            </div>
          </div>
        ))}

        <Link to={`/recipes?mealType=${currentTabLabel}`} className='btn btn-secondary label-large has-state'>
          Show more
        </Link>
      </div>

    </section>
  );
}

export default Tabs;