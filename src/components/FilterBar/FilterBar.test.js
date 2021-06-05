import renderer from 'react-test-renderer';
import FilterBar from './';
import { UserDataProvider } from '../../userDataContext';

describe('FilterBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserDataProvider>
        <FilterBar />
      </UserDataProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
