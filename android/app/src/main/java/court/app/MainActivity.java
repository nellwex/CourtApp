package court.app;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

@Override
public void onCreate (Bundle savedInstanceState){
    super.onCreate(savedInstanceState);
    registerPulgin(CapacitorGoogleMaps.class);
}

}
