import { fireEvent, render, screen } from '@testing-library/react';
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

  it('renders FilterBar with all 3 filters', () => {
    render(
      <UserDataProvider>
        <FilterBar />
      </UserDataProvider>
    );
    
    const spendTitleElement = screen.getByText('Spend:');
    const sliderElements = screen.getAllByRole('slider');

    const regionTitleElement = screen.getAllByText('Region')[0];
    const selectElement = screen.getByRole('combobox');

    const genderTitleElement = screen.getByText('Gender');
    const genderAllElement = screen.getByText('All');
    const genderMaleElement = screen.getByText('Male');
    const genderFemaleElement = screen.getByText('Female');

    expect(spendTitleElement).toBeInTheDocument();
    expect(sliderElements).toHaveLength(2);
    expect(regionTitleElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(genderTitleElement).toBeInTheDocument();
    expect(genderAllElement).toBeInTheDocument();
    expect(genderMaleElement).toBeInTheDocument();
    expect(genderFemaleElement).toBeInTheDocument();
  });

  describe('Spend', () => {
    it('renders title, values and slider with 2 handles', () => {
      render(
        <UserDataProvider>
          <FilterBar />
        </UserDataProvider>
      );
      
      const spendTitleElement = screen.getByText('Spend:');
      const sliderElements = screen.getAllByRole('slider');

      const minValueElement = screen.getByTestId('min-value');
      const maxValueElement = screen.getByTestId('max-value');

      expect(spendTitleElement).toBeInTheDocument();
      expect(sliderElements).toHaveLength(2);
      expect(minValueElement).toBeInTheDocument();
      expect(maxValueElement).toBeInTheDocument();
    });

    // it('moving slider handles updates values', () => {
    //   render(
    //     <UserDataProvider>
    //       <FilterBar />
    //     </UserDataProvider>
    //   );

    //   // screen.debug();

    //   let minValueElement = screen.getByTestId('min-value');
    //   let maxValueElement = screen.getByTestId('max-value');

    //   expect(minValueElement).toBeInTheDocument();
    //   expect(minValueElement.textContent).toBe('€0');
    //   expect(maxValueElement).toBeInTheDocument();
    //   expect(maxValueElement.textContent).toBe('€5000');

    //   const sliderElements = screen.getAllByRole('slider');
    //   console.log('slider handle 1', sliderElements[0].style, sliderElements[1].style);

    //   // sliderElements[0].focus()
    //   // fireEvent.click(sliderElements[0]);
    //   fireEvent.focus(sliderElements[0]);
    //   // fireEvent.keyDown(sliderElements[0], { key: 'ArrowRight', code: 'ArrowRight' });
    //   // fireEvent.keyDown(sliderElements[0], { key: 'ArrowRight', code: 'ArrowRight' });
    //   // fireEvent.keyDown(sliderElements[0], { key: 'ArrowRight', code: 'ArrowRight' });

    //   // fireEvent.change(sliderElements[0], { style: { left: '1%' } });

    //   console.log('slider h1 element id', sliderElements[0], sliderElements[0].target);
    //   console.log('document activeelement', document.activeElement, document.activeElement.target);

    //   // console.log('slider handle 1 after', sliderElements[0]);

    //   // screen.debug();

    //   console.log('min-value pre-refresh', minValueElement.textContent);

    //   minValueElement = screen.getByTestId('min-value');

    //   console.log('min-value post-refresh', minValueElement.textContent);
      
    //   expect(minValueElement.textContent).toBe('€3');
    //   expect(maxValueElement.textContent).toBe('€5000');

    //   fireEvent.click(sliderElements[1]);
    //   fireEvent.keyDown(sliderElements[1], { key: 'ArrowLeft', code: 'ArrowLeft' });
    //   fireEvent.keyDown(sliderElements[1], { key: 'ArrowLeft', code: 'ArrowLeft' });
    //   fireEvent.keyDown(sliderElements[1], { key: 'ArrowLeft', code: 'ArrowLeft' });

    //   minValueElement = screen.getByTestId('max-value');
      
    //   expect(minValueElement).toBeInTheDocument();
    //   expect(maxValueElement).toBeInTheDocument();

    // })
  });
});
