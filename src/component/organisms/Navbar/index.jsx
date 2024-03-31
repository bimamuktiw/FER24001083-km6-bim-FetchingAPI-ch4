import './style.css';
import Container from '../../atoms/Container';
import { useEffect, useState } from 'react';
import { cn } from '../../../lib/utils';
import Button from '../../atoms/Button';
import Search from '../../atoms/Search';

const THRESHOLD = 100;

function Navbar() {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScroll(e.currentTarget.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', (e) =>
        setScroll(e.currentTarget.scrollY)
      );
    };
  }, []);

  const scrollCondition = scroll > THRESHOLD;

  return (
    <header
      className={cn(
        'navbar flex justify-between duration-500',
        scrollCondition ? 'bg-[#1C1C1C]  bg-opacity-95' : 'backdrop-blur-sm'
      )}
    >
      <Container className="py-2">
        <div className="flex justify-between items-center">
          <div
            className={cn(
              ' font-Bebas text-red-600 font-bold text-3xl px-3 rounded-lg',
              !scrollCondition ? '' : ''
            )}
          >
            Nemplox
          </div>
          <div className="flex items-center gap-1">
            <Search
              className="hidden md:block sz-small  text-white"
              scrollCondition={scrollCondition}
            />
            <Button className=" button" variant="primary">
              Login
            </Button>
          </div>
        </div>
        <Search
          className="md:hidden block mt-5 w-full"
          scrollCondition={scrollCondition}
        />
      </Container>
    </header>
  );
}

export default Navbar;
