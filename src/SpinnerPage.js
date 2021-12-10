import React from 'react'
import {
  useLoading,
  BallTriangle,
  Oval
} from '@agney/react-loading'
 
const Sample = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <div>
      <BallTriangle width="50" />
      <Oval width="50" />
      </div>,
  });
  return (
    <div>
 
      <section {...containerProps}>
        {indicatorEl} {/* renders only while loading */}
      </section>
 
    </div>
  );
}
 
export default Sample;