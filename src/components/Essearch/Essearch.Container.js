import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/CustomTaskListState';
import Essearch from './Essearch';

const mapStateToProps = (state) => ({
  isOpen: state['essearch'].customTaskList.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Essearch);
