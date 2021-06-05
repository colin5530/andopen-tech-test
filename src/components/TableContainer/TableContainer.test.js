import renderer from 'react-test-renderer';
import TableContainer from './';
import { UserDataProvider } from '../../userDataContext';

describe('TableContainer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserDataProvider>
        <TableContainer />
      </UserDataProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
