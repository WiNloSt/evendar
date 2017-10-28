import React from 'react'
import { Paper, BottomNavigation, BottomNavigationItem, FontIcon } from 'material-ui'
import styled from 'react-emotion'
import { withState, compose } from 'recompose'
import { withRouter } from 'react-router-dom'

const Navigation = ({ routes, page, setPage, history }) => (
  <Wrapper>
    <StickyBottom>
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={page}>
          {routes.map((route, index) => (
            <BottomNavigationItem
              style={{ fontSize: 16 }}
              label={route.name}
              key={route.name}
              icon={<FontIcon className="material-icons">{route.icon}</FontIcon>}
              onClick={() => {
                history.push(route.path)
                setPage(index)
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </StickyBottom>
  </Wrapper>
)

export default compose(withRouter, withState('page', 'setPage', 0))(Navigation)

const Wrapper = styled.div``

const StickyBottom = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
`
