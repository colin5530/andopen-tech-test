import renderer from 'react-test-renderer';
import ChartContainer from './';
import { UserDataProvider } from '../../userDataContext';

describe('ChartContainer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <UserDataProvider>
        <ChartContainer />
      </UserDataProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
