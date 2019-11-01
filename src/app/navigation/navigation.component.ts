import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  logoName = 'Where in the world?';
  isDark = true;

  constructor() {}

  ngOnInit() {}

  changeMode() {
    this.isDark = !this.isDark;

    const bodyContainer = document.getElementById('bodyContainer');
    bodyContainer.classList.toggle('light-mode');

    const navBar = document.getElementById('navBar');
    navBar.classList.toggle('light-mode-element');

    const logoName = document.getElementById('logoName');
    logoName.classList.toggle('light-mode-text');

    const moonIcon = document.getElementById('moonIcon');
    moonIcon.classList.toggle('light-mode-text');

    const modeName = document.getElementById('modeName');
    modeName.classList.toggle('light-mode-text');

    const searchIconContainer = document.getElementById('searchIconContainer');
    searchIconContainer.classList.toggle('light-mode-element');

    const searchInput = document.getElementById('countrySearch');
    searchInput.classList.toggle('light-mode-input');

    const countryFilter = document.getElementById('countryFilter');
    countryFilter.classList.toggle('light-mode-element');

    const regionNames = document.getElementById('region-names');
    regionNames.classList.toggle('light-mode-element');

    const countriesContainer = document.querySelectorAll('.countries');
    countriesContainer.forEach(value =>
      value.classList.toggle('light-mode-element')
    );
  }
}
