type IContainerProps = {
  styles: React.CSSProperties;
  children: React.ReactNode;
};

const Container = (props: IContainerProps) => {
  const { styles, children } = props;
  return <div style={styles}>{children}</div>;
};

export default Container;
