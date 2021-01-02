import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import MailIcon from '@material-ui/icons/Mail';
import Link from 'next/link';
import HotelIcon from '@material-ui/icons/Hotel';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  aTag: {
      color: 'white',
      textDecoration: 'none',
  },
  paperAnchorLeft : {
    background: '#1BA0E2',
  },
  active: {
    color: 'yellow',
  }
});

export default function DDrawer({ open, toggleDrawer, navigations }) {
  const classes = useStyles();
  const router = useRouter();
  const currentSlug = router.asPath;
  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>
        {navigations.map(({ Title, Slug }, index) => (
          <ListItem button key={Slug}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={Title} />
          </ListItem>
        ))}
      </List>
      <Divider /> */}
      <List>
      <ListItem >
            <ListItemIcon></ListItemIcon>
            <Link href="/">
                  <a style={{color: 'white'}}><h4>Lux Journey</h4></a>
                </Link>
          </ListItem>
      {[
          { title: "Khách sạn", slug: '/khach-san'},
          { title: "Địa điểm", slug: '/dia-diem'},
          { title: "Trải nghiệm", slug: '/trai-nghiem'},
          { title: "Liên hệ", slug: '/lien-he'},
      ].map(({ title, slug }, index) => (
          <ListItem button key={slug}>
            <ListItemIcon style={{color: 'white'}}>{index % 2 === 0 ? <HotelIcon /> : <LoyaltyIcon />}</ListItemIcon>
            <Link href={`${slug}`}>
                  <a className={clsx(classes.aTag, currentSlug===`/${slug}`? classes.active: '')}>{title}</a>
                </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(
        <>
          <SwipeableDrawer
            anchor={'left'}
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            classes={{
              paperAnchorLeft: classes.paperAnchorLeft
            }}
            // transitionDuration={{enter: 1.5, exit: 1.5}}
          >
            {list()}
          </SwipeableDrawer>
        </>
      )}
    </div>
  );
}
