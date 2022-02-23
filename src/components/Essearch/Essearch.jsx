// import React from 'react';
// import PropTypes from 'prop-types';

// import { CustomTaskListComponentStyles } from './CustomTaskList.Styles';

import React from 'react';
import PropTypes from 'prop-types';

import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, Result, SearchBox, ResultsPerPage, Paging, PagingInfo } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import { ESSearch } from './ESSearch.Styles';

const { REACT_APP_SEARCH_KEY,REACT_APP_ENGINE_NAME,REACT_APP_ENDPOINTBASE } = process.env;

const connector = new AppSearchAPIConnector({
  searchKey: REACT_APP_SEARCH_KEY,
  engineName: REACT_APP_ENGINE_NAME,
  endpointBase: REACT_APP_ENDPOINTBASE,
  cacheResponses: false
});

// It is recommended to keep components stateless and use redux for managing states
const Essearch = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
   
    <ESSearch>
    <SearchProvider
      config={{
        apiConnector: connector,
        initialState: {
          resultsPerPage: 10
        },
        searchQuery: {
          search_fields: {
            title: {},
            description: {}
          },
          result_fields: {
            title: {
              snippet: {
                size: 100,
                fallback: true
              }
            },
            description: {
              snippet: {
                size: 900,
                fallback: true
              }
            },
            nps_link: {
              snippet: {
                size: 300,
                fallback: true
              }
            }
          }
        }
      }}
    >
      <div className="App">
        <Layout
          header={<SearchBox />}
          bodyHeader={
            <React.Fragment>
              {<PagingInfo
                end={10}
                start={1}
                totalResults={100}
              />}
            </React.Fragment>
          }
          bodyFooter={<Paging />}
          bodyContent={
            <Results titleField="title" urlField="nps_link" />
          }
        />
  
      </div>
    </SearchProvider>
  </ESSearch>
  );
};

Essearch.displayName = 'Essearch';

Essearch.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dismissBar: PropTypes.func.isRequired,
};

export default Essearch;
