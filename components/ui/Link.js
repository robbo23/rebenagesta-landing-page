import NextLink from 'next/link';

const Link = ({ href, children, ...props }) => {
  const isInternalLink = href?.startsWith('/');

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
    );
  }

  return (
    //eslint-disable-next-line react/jsx-no-target-blank
    <a href={href} {...props} target="_blank">
      {children}
    </a>
  );
};

export default Link;
